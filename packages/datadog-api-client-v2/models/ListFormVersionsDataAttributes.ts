/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormVersionAttributes } from "./FormVersionAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes for a list of form versions.
 */
export class ListFormVersionsDataAttributes {
  /**
   * The list of versions for the form.
   */
  "versions": Array<FormVersionAttributes>;

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
    versions: {
      baseName: "versions",
      type: "Array<FormVersionAttributes>",
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
    return ListFormVersionsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
