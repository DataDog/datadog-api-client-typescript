/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimelineCellAuthorUser } from "./TimelineCellAuthorUser";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * author of the timeline cell
 */

export type TimelineCellAuthor = TimelineCellAuthorUser | UnparsedObject;
