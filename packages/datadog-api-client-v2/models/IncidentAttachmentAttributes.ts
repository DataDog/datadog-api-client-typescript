/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentAttachmentLinkAttributes } from "./IncidentAttachmentLinkAttributes";
import { IncidentAttachmentPostmortemAttributes } from "./IncidentAttachmentPostmortemAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The attributes object for an attachment.
 */

export type IncidentAttachmentAttributes =
  | IncidentAttachmentPostmortemAttributes
  | IncidentAttachmentLinkAttributes
  | UnparsedObject;
