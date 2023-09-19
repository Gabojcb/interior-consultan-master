import { PageReactWidgetController } from "@beyond-js/react-18-widgets/page";
import { Main } from "./view";

export /*bundle*/
class Controller extends PageReactWidgetController {
  get Widget() {
    return Main;
  }
}
