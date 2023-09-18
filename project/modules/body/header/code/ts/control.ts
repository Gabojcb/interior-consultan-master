import { PageReactWidgetController } from "@beyond-js/react-18-widgets/page";
import { Header } from "./view/indext";

export /*bundle*/
class Controller extends PageReactWidgetController {
  get Widget() {
    return Header;
  }
}
