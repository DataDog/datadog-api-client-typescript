/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultAttributes } from "./SyntheticsTestResultAttributes";
import { SyntheticsTestResultRelationships } from "./SyntheticsTestResultRelationships";
import { SyntheticsTestResultType } from "./SyntheticsTestResultType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper object for a Synthetic test result.
 */
export class SyntheticsTestResultData {
  /**
   * Attributes of a Synthetic test result.
   */
  "attributes"?: SyntheticsTestResultAttributes;
  /**
   * The result ID.
   */
  "id"?: string;
  /**
   * Relationships for a Synthetic test result.
   */
  "relationships"?: SyntheticsTestResultRelationships;
  /**
   * Type of the Synthetic test result resource, `result`.
   */
  "type"?: SyntheticsTestResultType;

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
      type: "SyntheticsTestResultAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SyntheticsTestResultRelationships",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestResultType",
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
    return SyntheticsTestResultData.attributeTypeMap;
  }

  public constructor() {}
}
