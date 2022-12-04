import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "react-native-elements";
import RequestCard from "../components/RequestCard";
import { useIsFocused } from "@react-navigation/native";
import { getAllRequests } from "../apis/request";
import useAuth from "../auth/useAuth";

const AllRequests = () => {
    const [requests, setRequests] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const focus = useIsFocused();
    const { user } = useAuth();


    useEffect(() => {
        if (!focus) return;
        let query
        if (user?.role.includes("hod")) {
            query = {
                department: user.department,
            }
        }
        else if (user?.role.includes("advisor")) {
            query = {
                club: user.advisor_club,
            }
        }
        else if (user?.role.includes("representative")) {
            query = {
                club: user.representative_club,
            }
        }

        getAllRequests(query).then((res) => {
            if (res.ok && res.data.status == "success") {
                setRequests(res?.data?.data)
            }
        })
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setRequests([]);
        if (!focus) return;
        getAllRequests({ club: "Google Developer Students' Club" })
            .then((res) => {
                if (res.ok == true && res.data.status == "success") setRequests(res.data.data);
                else {
                }
            })
            .catch((err) => {
            });
        setRefreshing(false);
    }, []);


    return (
        <View style={styles.container}>
            {requests.length > 0 ? (
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    showsVerticalScrollIndicator={false}
                >
                    {requests.map((value, index) => {
                        return (
                            <View key={value._id}>
                                <RequestCard {...value} />
                            </View>
                        );
                    })}
                </ScrollView>
            ) : (
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}
                >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
        </View>
    );
};

export default AllRequests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    card: {
        backgroundColor: colors.grey5,
        margin: 10,
        padding: 10,
    },
    heading: {
        fontWeight: "bold",
    },
});