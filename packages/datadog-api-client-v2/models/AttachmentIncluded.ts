/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserData } from "./IncidentUserData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Objects related to an attachment.
 */

export type AttachmentIncluded = IncidentUserData | UnparsedObject;
