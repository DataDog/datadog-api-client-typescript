/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateSubjectTypeV2RequestDataAttributes } from "./ExperimentsCreateSubjectTypeV2RequestDataAttributes";
import { ExperimentsSubjectTypeV2DTODataType } from "./ExperimentsSubjectTypeV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Subject type resource to create.
 */
export class ExperimentsCreateSubjectTypeV2RequestData {
  /**
   * Name and data field mappings for the new subject type.
   */
  "attributes": ExperimentsCreateSubjectTypeV2RequestDataAttributes;
  /**
   * Optional JSON:API resource identifier field.
   */
  "id"?: string;
  /**
   * Subject types resource type.
   */
  "type": ExperimentsSubjectTypeV2DTODataType;

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
      type: "ExperimentsCreateSubjectTypeV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsSubjectTypeV2DTODataType",
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
    return ExperimentsCreateSubjectTypeV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
