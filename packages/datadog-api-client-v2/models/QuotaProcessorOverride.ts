/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FieldItem } from "./FieldItem";
import { QuotaLimit } from "./QuotaLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `QuotaProcessorOverride` object.
 */
export class QuotaProcessorOverride {
  /**
   * The `QuotaProcessorOverride` `fields`.
   */
  "fields": Array<FieldItem>;
  /**
   * Unified definition of `QuotaLimit` object.
   */
  "limit": QuotaLimit;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fields: {
      baseName: "fields",
      type: "Array<FieldItem>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "QuotaLimit",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QuotaProcessorOverride.attributeTypeMap;
  }

  public constructor() {}
}
