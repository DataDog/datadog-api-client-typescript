/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceAccessTokenResponseMetaPage } from "./ServiceAccessTokenResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional information related to the access token response.
 */
export class ServiceAccessTokenResponseMeta {
  /**
   * Pagination information.
   */
  "page"?: ServiceAccessTokenResponseMetaPage;

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
    page: {
      baseName: "page",
      type: "ServiceAccessTokenResponseMetaPage",
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
    return ServiceAccessTokenResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
