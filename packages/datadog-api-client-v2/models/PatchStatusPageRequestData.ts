/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchStatusPageRequestDataAttributes } from "./PatchStatusPageRequestDataAttributes";
import { StatusPageDataType } from "./StatusPageDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class PatchStatusPageRequestData {
  /**
   * The supported attributes for updating a status page.
   */
  "attributes": PatchStatusPageRequestDataAttributes;
  /**
   * The ID of the status page.
   */
  "id": string;
  /**
   * Status pages resource type.
   */
  "type": StatusPageDataType;

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
      type: "PatchStatusPageRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "StatusPageDataType",
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
    return PatchStatusPageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
