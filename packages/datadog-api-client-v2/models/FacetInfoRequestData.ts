/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FacetInfoRequestDataAttributes } from "./FacetInfoRequestDataAttributes";
import { FacetInfoRequestDataType } from "./FacetInfoRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FacetInfoRequestData {
  "attributes"?: FacetInfoRequestDataAttributes;
  "id"?: string;
  /**
   * Users facet info request resource type.
   */
  "type": FacetInfoRequestDataType;

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
      type: "FacetInfoRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FacetInfoRequestDataType",
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
    return FacetInfoRequestData.attributeTypeMap;
  }

  public constructor() {}
}
