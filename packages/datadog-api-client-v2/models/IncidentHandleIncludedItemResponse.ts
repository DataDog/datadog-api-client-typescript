/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentUserData } from "./IncidentUserData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single included resource item in an incident handle response, which can be a user or an incident type.
 */

export type IncidentHandleIncludedItemResponse =
  | IncidentUserData
  | IncidentTypeObject
  | UnparsedObject;
