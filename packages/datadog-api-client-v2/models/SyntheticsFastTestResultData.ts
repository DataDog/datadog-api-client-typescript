/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsFastTestResultAttributes } from "./SyntheticsFastTestResultAttributes";
import { SyntheticsFastTestResultType } from "./SyntheticsFastTestResultType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fast test result data object (JSON:API format).
 */
export class SyntheticsFastTestResultData {
  /**
   * Attributes of the fast test result.
   */
  "attributes"?: SyntheticsFastTestResultAttributes;
  /**
   * The UUID of the fast test, used as the result identifier.
   */
  "id"?: string;
  /**
   * JSON:API type for a fast test result.
   */
  "type"?: SyntheticsFastTestResultType;

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
      type: "SyntheticsFastTestResultAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsFastTestResultType",
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
    return SyntheticsFastTestResultData.attributeTypeMap;
  }

  public constructor() {}
}
