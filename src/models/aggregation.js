const Student = require("../models/studmodels");

const aggregate = async () => {
    try {
        const result = await Student.aggregate([
            {
                $lookup: {
                    from: "details",
                    localField: "_id",
                    foreignField: "studentId",
                    as: "details"
                }
            }
        ]);

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

module.exports = aggregate;