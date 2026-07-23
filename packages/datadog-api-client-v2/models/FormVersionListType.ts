/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for a list of form versions.
 */

export type FormVersionListType = typeof FORM_VERSION_LISTS | UnparsedObject;
export const FORM_VERSION_LISTS = "form_version_lists";
