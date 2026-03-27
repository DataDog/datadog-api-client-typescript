/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionDiffPatches } from "./SyntheticsTestVersionDiffPatches";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing metadata about a change action.
 */
export class SyntheticsTestVersionActionMetadata {
  /**
   * The value of the property after the change.
   */
  "afterValue"?: any;
  /**
   * The value of the property before the change.
   */
  "beforeValue"?: any;
  /**
   * List of diff patches for text changes.
   */
  "diffPatches"?: Array<SyntheticsTestVersionDiffPatches>;
  /**
   * The dot-separated path of the property that was changed.
   */
  "propertyPath"?: string;

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
    afterValue: {
      baseName: "after_value",
      type: "any",
    },
    beforeValue: {
      baseName: "before_value",
      type: "any",
    },
    diffPatches: {
      baseName: "diff_patches",
      type: "Array<SyntheticsTestVersionDiffPatches>",
    },
    propertyPath: {
      baseName: "property_path",
      type: "string",
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
    return SyntheticsTestVersionActionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
