import * as contactsActions from "../../models/contacts/index.js";

export const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await contactsActions.removeContact(contactId);

    res.status(200).json({
      message: "contact deleted",
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
