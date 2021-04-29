import expectInfo from "../model/expectModel";
import transInfo from "../model/transactionModel";
import Response from "../helpers/response";

class expect {
  static createExpect = async (req, res) => {
    const expectData = await expectInfo.create(req.body);
    // console.log(expectData);

    const transactData = await transInfo.create({
      userId: req.body.userId,
      expectationId: expectData._doc._id,
    });

    return Response.successMessage(
      res,
      "expect created success",
      { expectation: expectData._doc, transaction: transactData._doc },
      200
    );
  };
}

export default expect;
