import express from 'express'
import balitaRoute from './balita.route.js'

const router = express()

router.use(balitaRoute)


export default router
