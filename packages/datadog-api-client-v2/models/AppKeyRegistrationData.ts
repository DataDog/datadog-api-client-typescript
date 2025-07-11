/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppKeyRegistrationDataType } from "./AppKeyRegistrationDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the app key registration.
 */
export class AppKeyRegistrationData {
  /**
   * The app key registration identifier
   */
  "id"?: string;
  /**
   * The definition of `AppKeyRegistrationDataType` object.
   */
  "type": AppKeyRegistrationDataType;

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
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppKeyRegistrationDataType",
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
    return AppKeyRegistrationData.attributeTypeMap;
  }

  public constructor() {}
}
