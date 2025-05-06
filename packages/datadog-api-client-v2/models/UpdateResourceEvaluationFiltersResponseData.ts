/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResourceFilterAttributes } from "./ResourceFilterAttributes";
import { ResourceFilterRequestType } from "./ResourceFilterRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateResourceFilterResponseData` object.
 */
export class UpdateResourceEvaluationFiltersResponseData {
  /**
   * Attributes of a resource filter.
   */
  "attributes"?: ResourceFilterAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * Constant string to identify the resource type.
   */
  "type"?: ResourceFilterRequestType;

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
      type: "ResourceFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResourceFilterRequestType",
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
    return UpdateResourceEvaluationFiltersResponseData.attributeTypeMap;
  }

  public constructor() {}
}
