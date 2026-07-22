/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Indicates that the action is a send Slack message action.
*/

export type SendSlackMessageActionType = typeof SEND_SLACK_MESSAGE | UnparsedObject;
export const SEND_SLACK_MESSAGE = 'send_slack_message';