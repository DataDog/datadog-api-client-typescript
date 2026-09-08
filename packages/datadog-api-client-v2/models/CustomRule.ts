/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomRuleRevisionInput } from "./CustomRuleRevisionInput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A custom static analysis rule within a ruleset, as supplied in a create or update
 * request. Nested rules are sent flat, without a `data`/`type`/`attributes` envelope.
 * `id` and `name` are client-supplied and must match each other. The remaining members
 * are server-assigned and read-only; they are declared so that a ruleset previously
 * read back can be supplied unchanged.
 */
export class CustomRule {
  /**
   * Creation timestamp
   */
  "createdAt"?: Date;
  /**
   * Creator identifier
   */
  "createdBy"?: string;
  /**
   * Rule identifier, which is the same as the rule name.
   */
  "id": string;
  /**
   * A revision of a custom static analysis rule as embedded in a rule supplied by a create
   * or update request. Nested revisions are sent flat, without a `data`/`type`/`attributes`
   * envelope. `id`, `version_id`, `checksum`, `created_at` and `created_by` are server-assigned
   * and read-only; they are declared so that a ruleset previously read back can be supplied
   * unchanged.
   */
  "lastRevision"?: CustomRuleRevisionInput;
  /**
   * Rule name
   */
  "name": string;
  /**
   * Revision history of the rule.
   */
  "revisions"?: Array<CustomRuleRevisionInput>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    lastRevision: {
      baseName: "last_revision",
      type: "CustomRuleRevisionInput",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    revisions: {
      baseName: "revisions",
      type: "Array<CustomRuleRevisionInput>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomRule.attributeTypeMap;
  }

  public constructor() {}
}
