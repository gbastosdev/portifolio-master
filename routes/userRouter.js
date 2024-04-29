const express = require("express")
const controller = require('../controllers/userController')
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
*     tags:
*     - User Controller
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
router
.route('/users')
.get(controller.getUsers)

/**
     * @swagger
     * '/user':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: johndoe
     *              email:
     *                type: string
     *                default: johnDoe@dev.com
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router
.route('/user')
.post(controller.createUser);

/**
     * @swagger
     * '/user/{id}':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get a user by id
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The ID of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *  patch:
     *     tags:
     *     - User Controller
     *     summary: Modify a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - userId
     *            properties:
     *              username:
     *                type: string
     *                default: 'Michael Jordan'
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *  delete:
     *     tags:
     *     - User Controller
     *     summary: Delete a user
     *     content:
     *       application/json:
     *          schema:
     *           type: object
     *           required:
     *             - userId
     *     responses:
     *      200:
     *        description: Deleted
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router
.route('/user/:id')
.get(controller.getUser)
.patch(controller.updateUser)
.delete(controller.deleteUser);


module.exports = router