/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV1 } from "./ServiceDefinitionV1";
import { ServiceDefinitionV2 } from "./ServiceDefinitionV2";
import { ServiceDefinitionV2Dot1 } from "./ServiceDefinitionV2Dot1";
import { ServiceDefinitionV2Dot2 } from "./ServiceDefinitionV2Dot2";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Service definition schema.
*/

export type ServiceDefinitionSchema = ServiceDefinitionV1 | ServiceDefinitionV2 | ServiceDefinitionV2Dot1 | ServiceDefinitionV2Dot2 | UnparsedObject;