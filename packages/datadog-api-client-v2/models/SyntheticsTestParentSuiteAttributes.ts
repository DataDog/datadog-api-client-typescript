/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing details about a parent suite of a Synthetic test.
 */
export class SyntheticsTestParentSuiteAttributes {
  /**
   * The name of the child test within the suite.
   */
  "childName"?: string;
  /**
   * The public ID of the child test within the suite.
   */
  "childPublicId"?: string;
  /**
   * The associated monitor ID.
   */
  "monitorId"?: number;
  /**
   * Name of the parent suite.
   */
  "name"?: string;
  /**
   * The overall state of the parent suite.
   */
  "overallState"?: number;
  /**
   * Timestamp of when the overall state was last modified.
   */
  "overallStateModified"?: string;
  /**
   * The public ID of the parent suite.
   */
  "publicId"?: string;

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
    childName: {
      baseName: "child_name",
      type: "string",
    },
    childPublicId: {
      baseName: "child_public_id",
      type: "string",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    overallState: {
      baseName: "overall_state",
      type: "number",
      format: "int64",
    },
    overallStateModified: {
      baseName: "overall_state_modified",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
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
    return SyntheticsTestParentSuiteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
