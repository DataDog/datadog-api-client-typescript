/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentData } from "./IncidentAttachmentData";
import { IncidentUserData } from "./IncidentUserData";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * An object related to an incident that is included in the response.
*/

export type IncidentResponseIncludedItem = IncidentUserData | IncidentAttachmentData | UnparsedObject;