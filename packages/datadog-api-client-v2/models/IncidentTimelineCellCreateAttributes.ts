/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimelineCellMarkdownCreateAttributes } from "./IncidentTimelineCellMarkdownCreateAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The timeline cell's attributes for a create request.
 */

export type IncidentTimelineCellCreateAttributes =
  | IncidentTimelineCellMarkdownCreateAttributes
  | UnparsedObject;
