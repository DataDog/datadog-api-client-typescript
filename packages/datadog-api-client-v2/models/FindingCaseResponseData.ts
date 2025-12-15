/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseDataType } from "./CaseDataType";
import { FindingCaseResponseDataAttributes } from "./FindingCaseResponseDataAttributes";
import { FindingCaseResponseDataRelationships } from "./FindingCaseResponseDataRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the case.
 */
export class FindingCaseResponseData {
  /**
   * Attributes of the case.
   */
  "attributes"?: FindingCaseResponseDataAttributes;
  /**
   * Unique identifier of the case.
   */
  "id"?: string;
  /**
   * Relationships of the case.
   */
  "relationships"?: FindingCaseResponseDataRelationships;
  /**
   * Cases resource type.
   */
  "type": CaseDataType;

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
      type: "FindingCaseResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "FindingCaseResponseDataRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseDataType",
      required: true,
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
    return FindingCaseResponseData.attributeTypeMap;
  }

  public constructor() {}
}
