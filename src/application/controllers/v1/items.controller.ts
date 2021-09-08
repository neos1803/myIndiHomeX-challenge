import { Controller, Get, Route } from "tsoa";
import { ResponseHelper } from "../../../utils/response.helper";
import { Items, item_attributes } from "../../models/v1/items";

@Route('/items')
export class ItemsController extends Controller {

  @Get()
  public getAllItems(): ResponseHelper<Items> {
    try {
      this.setStatus(200)
      return new ResponseHelper<any>({
        data: item_attributes
      }, true);
    } catch (error) {
      this.setStatus(500);
      return new ResponseHelper<any>({
        message: error.message
      }, false);
    }
  }

}
