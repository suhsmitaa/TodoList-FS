import "./style.css";

import { bootup } from "./app/routes/renderRoute.service.ts";
import { init, updateAccessToken } from "mftsccs-browser";
import { environment } from "./app/environments/environment.dev.ts";
import { getLocalStorageData } from "./app/pages/login/login.service.ts";


await init(environment?.boomURL, environment?.aiURL, "", environment?.baseNodeUrl);
const profileStorageData: any = await getLocalStorageData();
updateAccessToken(profileStorageData?.token);
bootup();
