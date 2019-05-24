const LeaveModel = require('../models/leaveModel');

const createLeave = async (req, res) => {
    try {
      const leave = await LeaveModel.create(req.body);
      const response = leave.toJSON();

      res.status(200).json({
        status: 'success',
        data: { leave: response },
      });
    } catch (err) {
      console.log(err);
  
      res.status(500).json({
        status: 'error',
        message: 'An error occured while creating your Leave 😭',
      });
    }
  };

  const getAllUserLeave = async function(req, res) {
    try {
      //@ts-ignore
      const leave = await LeaveModel.find({ first_name: req.user.first_name })
      .populate('user') // only works if we pushed refs to person.eventsAttended
      .exec(function(err, user) {
          if (err) return handleError(err);
          console.log(user);
          res.json({ status: 'success', 
                  data: { user: user }}
                  );
      });  
      
    } catch (err) {
      console.log(err);
  
      res.status(401).json({ status: 'error', message: err.message });
    }
  };

  const getAleave = async function(req, res) {
    try {
      //@ts-ignore
      const leave = await LeaveModel.findById(req.params.leaveId);
  
      res.json({ status: 'success', data: {leave: leave} });
    } catch (err) {
      console.log(err);
  
      res.status(401).json({ status: 'error', message: err.message });
    }
  };
  

  

  
  
  

module.exports = {
    createLeave,
    getAllUserLeave,
    getAleave,
};