/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RevertCustomRuleRevisionDataType } from "./RevertCustomRuleRevisionDataType";
import { RevertCustomRuleRevisionRequestDataAttributes } from "./RevertCustomRuleRevisionRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class RevertCustomRuleRevisionRequestData {
  "attributes"?: RevertCustomRuleRevisionRequestDataAttributes;
  /**
   * Request identifier
   */
  "id"?: string;
  /**
   * Request type
   */
  "type"?: RevertCustomRuleRevisionDataType;

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
    attributes: {
      baseName: "attributes",
      type: "RevertCustomRuleRevisionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RevertCustomRuleRevisionDataType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RevertCustomRuleRevisionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
