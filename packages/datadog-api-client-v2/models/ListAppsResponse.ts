/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentIncluded } from "./DeploymentIncluded";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ListAppsResponse` object.
 */
export class ListAppsResponse {
  /**
   * The `ListAppsResponse` `data`.
   */
  "data"?: Array<ListAppsResponseDataItems>;
  /**
   * The `ListAppsResponse` `included`.
   */
  "included"?: Array<DeploymentIncluded>;
  /**
   * The definition of `ListAppsResponseMeta` object.
   */
  "meta"?: ListAppsResponseMeta;

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
      type: "Array<ListAppsResponseDataItems>",
    },
    included: {
      baseName: "included",
      type: "Array<DeploymentIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "ListAppsResponseMeta",
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
    return ListAppsResponse.attributeTypeMap;
  }

  public constructor() {}
}
