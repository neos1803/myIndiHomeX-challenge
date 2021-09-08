import * as express from 'express'
import { ResponseHelper } from "../../../utils/response.helper";
import { Post, Controller, Route, BodyProp, Get, Query, Example, Request, Response } from 'tsoa';

@Route('/health-check')
export class HealthCheckController extends Controller {
  
  @Get()
  public async healthCheck(): Promise<any> {
    try {
      this.setStatus(200);
      return new ResponseHelper<any>({
        data: 'Okay'
      }, true);
    } catch (error) {
      this.setStatus(500);
      return new ResponseHelper<any>({
        message: error.message
      }, false);
    }
  }
}