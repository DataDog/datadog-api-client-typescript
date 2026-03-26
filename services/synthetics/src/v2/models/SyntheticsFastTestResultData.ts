import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsFastTestResultAttributes } from "./SyntheticsFastTestResultAttributes";
import { SyntheticsFastTestResultType } from "./SyntheticsFastTestResultType";

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
