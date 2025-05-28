/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3API } from "./EntityV3API";
import { EntityV3Datastore } from "./EntityV3Datastore";
import { EntityV3Queue } from "./EntityV3Queue";
import { EntityV3Service } from "./EntityV3Service";
import { EntityV3System } from "./EntityV3System";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Entity schema v3.
*/

export type EntityV3 = EntityV3Service | EntityV3Datastore | EntityV3Queue | EntityV3System | EntityV3API | UnparsedObject;