import resourcesSchema from "../../models/resources.js";
import keysSchema from "../../models/keys.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

const createResource = async (req, res) => {
  const { name, department, is_room, capacity, key_code } = req.body;

  try {
    const key = await keysSchema.create({
      resource_name: name,
      department,
      key_code,
    });

    const resource = await resourcesSchema.create({
      name,
      department,
      is_room,
      capacity,
    });

    sendSuccessResponse({ res, data: { resource, key } });
  } catch (err) {
    sendFailResponse({ res, statusCode: 400, err });
  }
};

export default createResource;