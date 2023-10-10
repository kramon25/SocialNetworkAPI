const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/ThoughtController");

// /api/thoughts GET all and POST thought
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD

router.route("/:thoughtId");

router.get(getSingleThought);

router.put(updateThought);

router.delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
