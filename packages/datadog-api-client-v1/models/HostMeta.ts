/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AgentCheck } from "./AgentCheck";
import { AgentCheckItem } from "./AgentCheckItem";
import { HostMetaInstallMethod } from "./HostMetaInstallMethod";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Metadata associated with your host.
*/
export class HostMeta {
  /**
   * A list of Agent checks running on the host.
  */
  "agentChecks"?: Array<Array<any>>;
  /**
   * The Datadog Agent version.
  */
  "agentVersion"?: string;
  /**
   * The number of cores.
  */
  "cpuCores"?: number;
  /**
   * An array of Mac versions.
  */
  "fbsdV"?: Array<any>;
  /**
   * JSON string containing system information.
  */
  "gohai"?: string;
  /**
   * Agent install method.
  */
  "installMethod"?: HostMetaInstallMethod;
  /**
   * An array of Mac versions.
  */
  "macV"?: Array<any>;
  /**
   * The machine architecture.
  */
  "machine"?: string;
  /**
   * Array of Unix versions.
  */
  "nixV"?: Array<any>;
  /**
   * The OS platform.
  */
  "platform"?: string;
  /**
   * The processor.
  */
  "processor"?: string;
  /**
   * The Python version.
  */
  "pythonV"?: string;
  /**
   * The socket fqdn.
  */
  "socketFqdn"?: string;
  /**
   * The socket hostname.
  */
  "socketHostname"?: string;
  /**
   * An array of Windows versions.
  */
  "winV"?: Array<any>;

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
    "agentChecks": {
      "baseName": "agent_checks",
      "type": "Array<Array<any>>",
    },
    "agentVersion": {
      "baseName": "agent_version",
      "type": "string",
    },
    "cpuCores": {
      "baseName": "cpuCores",
      "type": "number",
      "format": "int64",
    },
    "fbsdV": {
      "baseName": "fbsdV",
      "type": "Array<any>",
    },
    "gohai": {
      "baseName": "gohai",
      "type": "string",
    },
    "installMethod": {
      "baseName": "install_method",
      "type": "HostMetaInstallMethod",
    },
    "macV": {
      "baseName": "macV",
      "type": "Array<any>",
    },
    "machine": {
      "baseName": "machine",
      "type": "string",
    },
    "nixV": {
      "baseName": "nixV",
      "type": "Array<any>",
    },
    "platform": {
      "baseName": "platform",
      "type": "string",
    },
    "processor": {
      "baseName": "processor",
      "type": "string",
    },
    "pythonV": {
      "baseName": "pythonV",
      "type": "string",
    },
    "socketFqdn": {
      "baseName": "socket-fqdn",
      "type": "string",
    },
    "socketHostname": {
      "baseName": "socket-hostname",
      "type": "string",
    },
    "winV": {
      "baseName": "winV",
      "type": "Array<any>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return HostMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









