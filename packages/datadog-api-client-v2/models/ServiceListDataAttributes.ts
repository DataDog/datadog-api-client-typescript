/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceListDataAttributesMetadataItems } from "./ServiceListDataAttributesMetadataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class ServiceListDataAttributes {
  "metadata"?: Array<ServiceListDataAttributesMetadataItems>;
  "services"?: Array<string>;

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
    metadata: {
      baseName: "metadata",
      type: "Array<ServiceListDataAttributesMetadataItems>",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
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
    return ServiceListDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
