/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleVersionUpdateType } from "./RuleVersionUpdateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A change in a rule version.
 */
export class RuleVersionUpdate {
  /**
   * The new value of the field.
   */
  "change"?: string;
  /**
   * The field that was changed.
   */
  "field"?: string;
  /**
   * The type of change.
   */
  "type"?: RuleVersionUpdateType;

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
    change: {
      baseName: "change",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RuleVersionUpdateType",
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
    return RuleVersionUpdate.attributeTypeMap;
  }

  public constructor() {}
}
