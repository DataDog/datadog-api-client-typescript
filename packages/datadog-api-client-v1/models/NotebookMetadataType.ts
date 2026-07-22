/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Metadata type of the notebook.
*/

export type NotebookMetadataType = typeof POSTMORTEM| typeof RUNBOOK| typeof INVESTIGATION| typeof DOCUMENTATION| typeof REPORT | UnparsedObject;
export const POSTMORTEM = 'postmortem';
export const RUNBOOK = 'runbook';
export const INVESTIGATION = 'investigation';
export const DOCUMENTATION = 'documentation';
export const REPORT = 'report';