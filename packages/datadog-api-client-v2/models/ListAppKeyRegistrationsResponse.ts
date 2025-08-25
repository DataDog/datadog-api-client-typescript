/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppKeyRegistrationData } from "./AppKeyRegistrationData";
import { ListAppKeyRegistrationsResponseMeta } from "./ListAppKeyRegistrationsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A paginated list of app key registrations.
 */
export class ListAppKeyRegistrationsResponse {
  /**
   * An array of app key registrations.
   */
  "data"?: Array<AppKeyRegistrationData>;
  /**
   * The definition of `ListAppKeyRegistrationsResponseMeta` object.
   */
  "meta"?: ListAppKeyRegistrationsResponseMeta;

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
    data: {
      baseName: "data",
      type: "Array<AppKeyRegistrationData>",
    },
    meta: {
      baseName: "meta",
      type: "ListAppKeyRegistrationsResponseMeta",
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
    return ListAppKeyRegistrationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
