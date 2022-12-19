/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2EmailType } from "./ServiceDefinitionV2EmailType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service owner's email.
 */
export class ServiceDefinitionV2Email {
  /**
   * Contact value.
   */
  "contact": string;
  /**
   * Contact email.
   */
  "name"?: string;
  /**
   * Contact type.
   */
  "type": ServiceDefinitionV2EmailType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contact: {
      baseName: "contact",
      type: "string",
      required: true,
      format: "email",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2EmailType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Email.attributeTypeMap;
  }

  public constructor() {}
}
