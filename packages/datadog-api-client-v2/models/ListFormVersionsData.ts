/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormVersionListType } from "./FormVersionListType";
import { ListFormVersionsDataAttributes } from "./ListFormVersionsDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list-of-form-versions resource object.
 */
export class ListFormVersionsData {
  /**
   * The attributes for a list of form versions.
   */
  "attributes": ListFormVersionsDataAttributes;
  /**
   * The ID of the form.
   */
  "id": string;
  /**
   * The resource type for a list of form versions.
   */
  "type": FormVersionListType;

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
      type: "ListFormVersionsDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormVersionListType",
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
    return ListFormVersionsData.attributeTypeMap;
  }

  public constructor() {}
}
