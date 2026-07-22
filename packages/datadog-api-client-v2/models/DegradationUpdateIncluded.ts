/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Degradation } from "./Degradation";
import { StatusPageAsIncluded } from "./StatusPageAsIncluded";
import { StatusPagesUser } from "./StatusPagesUser";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Resources included in a degradation update response.
*/

export type DegradationUpdateIncluded = StatusPagesUser | Degradation | StatusPageAsIncluded | UnparsedObject;