import { Ref, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { drawAnnotation, drawBall, drawBot, drawFieldHorizontal } from "../field/field"
import { Field } from "../types/geometry"

export function FieldView() {
  const world = useSelector((state: RootState) => state.crabe.world)
  const annotation = useSelector((state: RootState) => state.crabe.annotations)

  const canvasRef: Ref<HTMLCanvasElement> = useRef(null)

  function initCanvas(context: CanvasRenderingContext2D, field: Field, horizontal : boolean) {

    if (horizontal)
    {
      const ratio = field.width / field.length
      let parent = context.canvas.parentElement
      context.canvas.width = parent != null ? parent.clientWidth : context.canvas.offsetWidth
      context.canvas.height = context.canvas.width * ratio
      if (parent != null && context.canvas.height > parent.clientHeight) {
        context.canvas.height = parent.clientHeight
        context.canvas.width = context.canvas.height / ratio
      }
      clearCanvas(context)

      let x = context.canvas.width / field.length
      let y = context.canvas.height / field.width
      let scale_factor = (x + y) / 2.1
      context.translate(context.canvas.width / 2, context.canvas.height / 2)
      context.scale(scale_factor, -scale_factor)
    }
  }

  function clearCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  }

  useEffect(() => {
    if (world == null) return
    const canvas = canvasRef.current
    if (canvas == null) return
    const context = canvas.getContext("2d")
    if (context == null) return
    initCanvas(context, world.geometry.field, true)
    context.strokeStyle = "#fff"
    context.lineWidth = 0.03 // TODO: LineWidth
    drawFieldHorizontal(context, world.geometry, world.teamColor)
    drawBot(context, world.alliesBot, world.enemiesBot, world.teamColor)
    if (world.ball !== null) drawBall(context, world.ball)
  }, [world])

  useEffect(() => {
    if (annotation == null) return
    const canvas = canvasRef.current
    if (canvas == null) return
    const context = canvas.getContext("2d")
    if (context == null) return
    context.strokeStyle = "#fff"
    context.lineWidth = 0.03
    for (const key in annotation) {
      drawAnnotation(context, annotation[key])
    }
  }, [annotation])
  return <canvas ref={canvasRef}></canvas>
}
