/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomFrameworkDataHandleAndVersion } from "./CustomFrameworkDataHandleAndVersion";
import { CustomFrameworkType } from "./CustomFrameworkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Contains type and attributes for custom frameworks.
 */
export class FrameworkHandleAndVersionResponseData {
  /**
   * Framework Handle and Version.
   */
  "attributes": CustomFrameworkDataHandleAndVersion;
  /**
   * The ID of the custom framework.
   */
  "id": string;
  /**
   * The type of the resource. The value must be `custom_framework`.
   */
  "type": CustomFrameworkType;

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
      type: "CustomFrameworkDataHandleAndVersion",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomFrameworkType",
      required: true,
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
    return FrameworkHandleAndVersionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
