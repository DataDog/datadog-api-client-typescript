/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The tag indexing rule exemption resource type.
 */

export type TagIndexingRuleExemptionType =
  | typeof TAG_INDEXING_RULE_EXEMPTIONS
  | UnparsedObject;
export const TAG_INDEXING_RULE_EXEMPTIONS = "tag_indexing_rule_exemptions";
