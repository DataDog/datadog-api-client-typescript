/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the IdP configuration.
 */
export class IdpFormData {
  /**
   * The path to the XML metadata file you wish to upload.
   */
  "idpFile": HttpFile;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    idpFile: {
      baseName: "idp_file",
      type: "HttpFile",
      required: true,
      format: "binary",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IdpFormData.attributeTypeMap;
  }

  public constructor() {}
}
